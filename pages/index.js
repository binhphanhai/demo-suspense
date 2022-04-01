import { Suspense } from "react";
import Spinner from "../components/spinner";
import ChipotleStats from "../components/chipotle-stats";
import TwitterStats from "../components/twitter-stats";
import YouTubeStats from "../components/youtube-stats";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="p-8">
      <h3 className="text-lg font-medium leading-6 text-gray-900">Dashboard</h3>

      <Suspense fallback={<Loading />}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-wrap"
        >
          <TwitterStats />
          <YouTubeStats />
          <ChipotleStats />
        </motion.div>
      </Suspense>
    </div>
  );
}

function Loading() {
  return (
    <div className="flex justify-center mt-44">
      <Spinner />
    </div>
  );
}
