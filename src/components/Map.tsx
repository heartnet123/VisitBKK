
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapProps {
  waypoints?: Array<{
    coords: [number, number];
    name: string;
  }>;
  className?: string;
  style?: React.CSSProperties;
  center?: [number, number];
  zoom?: number;
  interactive?: boolean;
  showNavigation?: boolean;
}

const Map: React.FC<MapProps> = ({
  waypoints = [],
  className = '',
  style = {},
  center = [100.5018, 13.7563], // Bangkok center
  zoom = 12,
  interactive = true,
  showNavigation = true
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapKey, setMapKey] = useState<string>('');

  useEffect(() => {
    // Try to get the key from localStorage first
    const storedKey = localStorage.getItem('mapbox_key');
    if (storedKey) {
      setMapKey(storedKey);
      return;
    }
    
    // If no key, prompt the user
    const key = prompt(
      "Please enter your Mapbox public token. You can get one at https://mapbox.com/",
      ""
    );
    
    if (key) {
      localStorage.setItem('mapbox_key', key);
      setMapKey(key);
    }
  }, []);

  useEffect(() => {
    if (!mapContainer.current || !mapKey) return;

    // Initialize map
    mapboxgl.accessToken = mapKey;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: center,
      zoom: zoom,
      interactive: interactive,
    });

    // Add navigation controls if needed
    if (showNavigation) {
      map.current.addControl(
        new mapboxgl.NavigationControl(),
        'top-right'
      );
    }

    // Add markers for waypoints
    waypoints.forEach((waypoint, index) => {
      const el = document.createElement('div');
      el.className = 'waypoint-marker';
      el.innerHTML = `<div class="w-6 h-6 rounded-full bg-thai-blue flex items-center justify-center text-white text-xs">${index + 1}</div>`;
      
      new mapboxgl.Marker(el)
        .setLngLat(waypoint.coords)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML(`<h3 class="font-medium">${waypoint.name}</h3>`)
        )
        .addTo(map.current!);
    });

    // Draw route line if there are multiple waypoints
    if (waypoints.length > 1) {
      map.current.on('load', () => {
        const coordinates = waypoints.map(wp => wp.coords);
        
        if (map.current) {
          map.current.addSource('route', {
            'type': 'geojson',
            'data': {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'LineString',
                'coordinates': coordinates
              }
            }
          });
          
          map.current.addLayer({
            'id': 'route',
            'type': 'line',
            'source': 'route',
            'layout': {
              'line-join': 'round',
              'line-cap': 'round'
            },
            'paint': {
              'line-color': '#0066CC',
              'line-width': 4,
              'line-opacity': 0.75
            }
          });

          // Fit bounds to show all waypoints
          if (waypoints.length > 1) {
            const bounds = new mapboxgl.LngLatBounds();
            coordinates.forEach(coord => bounds.extend(coord as [number, number]));
            map.current.fitBounds(bounds, { padding: 50 });
          }
        }
      });
    }

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [center, zoom, interactive, showNavigation, waypoints, mapKey]);

  if (!mapKey) {
    return (
      <div className={`bg-gray-100 rounded-lg flex items-center justify-center ${className}`} style={style}>
        <div className="p-4 text-center">
          <p>Please provide a Mapbox token to display the map.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} style={style}>
      <div ref={mapContainer} className="absolute inset-0 rounded-lg" />
      <style>
        {`
        .waypoint-marker {
          cursor: pointer;
        }
        `}
      </style>
    </div>
  );
};

export default Map;
