import React, { useEffect, useRef } from 'react';

interface GoogleMapProps {
  className?: string;
}

// Types pour Google Maps
interface GoogleMaps {
  Map: new (element: HTMLElement, options: any) => any;
  Marker: new (options: any) => any;
  InfoWindow: new (options: any) => any;
  Circle: new (options: any) => any;
  Size: new (width: number, height: number) => any;
  Point: new (x: number, y: number) => any;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ className = '' }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    // Ne pas charger Google Maps en SSR
    if (typeof window === 'undefined') return;

    const loadGoogleMaps = () => {
      const google = (window as any).google;
      if (google && google.maps) {
        initializeMap();
        return;
      }

      // Check if Google Maps script is already loaded
      const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
      if (existingScript) {
        // Script is already loading, wait for it to complete
        (window as any).initMap = initializeMap;
        return;
      }

      // Create script element
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAEala3qA7KumlWYAaeKfJrdECoBrWpa80&callback=initMap`;
      script.async = true;
      script.defer = true;

      // Set up callback
      (window as any).initMap = initializeMap;

      document.head.appendChild(script);
    };

    const initializeMap = () => {
      const google = (window as any).google;
      if (!mapRef.current || !google) return;

      // Coordinates for Île-de-France center (approximately Paris)
      const center = { lat: 49.0370, lng: 2.0781 }; // Cergy coordinates

      // Create map
      const map = new google.maps.Map(mapRef.current, {
        zoom: 9,
        center: center,
        styles: [
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#e9e9e9' }, { lightness: 17 }]
          },
          {
            featureType: 'landscape',
            elementType: 'geometry',
            stylers: [{ color: '#f5f5f5' }, { lightness: 20 }]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.fill',
            stylers: [{ color: '#ffffff' }, { lightness: 17 }]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#ffffff' }, { lightness: 29 }, { weight: 0.2 }]
          },
          {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [{ color: '#ffffff' }, { lightness: 18 }]
          },
          {
            featureType: 'road.local',
            elementType: 'geometry',
            stylers: [{ color: '#ffffff' }, { lightness: 16 }]
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{ color: '#f5f5f5' }, { lightness: 21 }]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{ color: '#dedede' }, { lightness: 21 }]
          }
        ],
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
        zoomControl: true,
        gestureHandling: 'cooperative'
      });

      mapInstanceRef.current = map;

      // Add main marker for Paris
      new google.maps.Marker({
        position: center,
        map: map,
        title: 'FKR MULTI-SERVICES - Cergy',
        icon: {
          url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" fill="#2563eb" stroke="white" stroke-width="4"/>
              <path d="M20 10L25 18H15L20 10Z" fill="white"/>
              <circle cx="20" cy="25" r="3" fill="white"/>
            </svg>
          `),
          scaledSize: new google.maps.Size(40, 40),
          anchor: new google.maps.Point(20, 40)
        }
      });

      // Add service area circle
      new google.maps.Circle({
        strokeColor: '#2563eb',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#2563eb',
        fillOpacity: 0.1,
        map: map,
        center: center,
        radius: 50000 // 50km radius
      });

      // Add info window
      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="padding: 10px; font-family: Arial, sans-serif;">
            <h3 style="margin: 0 0 8px 0; color: #1f2937; font-size: 16px;">FKR MULTI-SERVICES</h3>
            <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">
              Plomberie • Chauffage • Électricité
            </p>
            <p style="margin: 0 0 8px 0; color: #2563eb; font-size: 14px; font-weight: bold;">
              📞 09 88 09 78 55
            </p>
            <p style="margin: 0; color: #059669; font-size: 12px;">
              ✅ Intervention rapide dans les départements 78, 95, 92, 93
            </p>
          </div>
        `
      });

      // Add click listener to marker
      const marker = new google.maps.Marker({
        position: center,
        map: map,
        title: 'FKR MULTI-SERVICES - Cliquez pour plus d\'infos'
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });
    };

    loadGoogleMaps();

    return () => {
      // Cleanup
      const windowAny = window as any;
      if (windowAny.initMap) {
        delete windowAny.initMap;
      }
    };
  }, []);

  return (
    <div className={`w-full h-full ${className}`}>
      <div 
        ref={mapRef} 
        className="w-full h-full rounded-xl"
        style={{ minHeight: '400px' }}
      />
    </div>
  );
};

export default GoogleMap;