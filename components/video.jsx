import { useState } from "react";
import { Skeleton } from "./skeleton";
import { View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export function Video({ src }) {
  const [loading, setLoading] = useState(true);
  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <View style={{ position: "relative" }}>
      {loading && (
        <View style={{ position: "absolute" }}>
          <Skeleton width={321} height={178.6} borderRadius={10} />
        </View>
      )}
      <YoutubePlayer
        height={178.6}
        width={321}
        videoId={src}
        play={false}
        onReady={handleLoad}
      />
    </View>
  );
}
