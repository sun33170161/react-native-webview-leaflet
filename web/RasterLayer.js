import React from "react";

import {
  TileLayer,
  WMSTileLayer,
  ImageOverlay,
  VideoOverlay,
  Polyline
} from "react-leaflet";

const RasterLayer = props => {
  console.log({ props });
  if (props.layer) {
    if (props.layer.type === "Polyline") {
      return (
        <Polyline
          attribution={props.layer.attribution}
          positions={props.layer.positions}
          {...props}
        />
      );
    } else if (props.layer.type === "TileLayer") {
      return (
        <TileLayer
          attribution={props.layer.attribution}
          url={props.layer.url}
          zIndex={props.layer.zIndex || 0}
          {...props}
        />
      );
    } else if (props.layer.type === "WMSTileLayer") {
      return (
        <WMSTileLayer
          url={props.layer.url}
          layers={props.layer.layers}
          {...props}
        />
      );
    } else if (props.layer.type === "ImageOverlay") {
      // debugger;
      return (
        <ImageOverlay
          url={props.layer.url}
          bounds={props.layer.bounds}
          opacity={props.layer.opacity || 1}
          zIndex={props.layer.zIndex || 0}
          {...props}
        />
      );
    } else if (props.layer.type === "VideoOverlay") {
      return (
        <VideoOverlay
          url={props.layer.url}
          bounds={props.layer.bounds}
          opacity={props.layer.opacity || 1}
          play={props.layer.play || true}
          zIndex={props.layer.zIndex || 0}
          {...props}
        />
      );
    }
  }
  return null;
};

export default RasterLayer;
