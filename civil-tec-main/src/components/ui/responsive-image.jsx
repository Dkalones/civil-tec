import * as React from "react";

import { cn } from "@/lib/utils";
import { useResponsiveImage } from "./use-responsive-image";
import { buildSrcSet, buildTransformUrl, splitImageProps } from "./image-helpers";

const ResponsiveImage = React.forwardRef(
  (
    {
      src,
      parsed,
      onSourceChange,
      fittingType,
      focalPoint,
      quality,
      aspectRatio,
      ...props
    },
    ref,
  ) => {
    const { wrapperRef, imgRef, options, handleLoad } = useResponsiveImage(
      {
        parsed,
        fittingType,
        focalPoint,
        quality,
        className: props.className,
        onLoad: props.onLoad,
        onSourceChange,
      },
      ref,
    );
    const { wrapperProps, imageProps } = splitImageProps(props);
    const transformedSrc = options ? buildTransformUrl(parsed, options) : src;
    const srcSet = options ? buildSrcSet(parsed, options) : undefined;
    const { className, onLoad: _onLoad, ...restImageProps } = imageProps;

    return (
      <span
        ref={wrapperRef}
        className={cn("inline-block relative", className)}
        style={{ aspectRatio }}
        {...wrapperProps}
      >
        <img
          ref={imgRef}
          src={transformedSrc}
          srcSet={srcSet}
          sizes="100vw"
          className={className}
          onLoad={handleLoad}
          {...restImageProps}
        />
      </span>
    );
  },
);

ResponsiveImage.displayName = "ResponsiveImage";

export { ResponsiveImage };
