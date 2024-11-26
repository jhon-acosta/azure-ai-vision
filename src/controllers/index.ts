import type { FastifyPluginAsync } from "fastify";

import visionAI from "./vision-ai";

const controllers: FastifyPluginAsync = async (instance) => {
  instance.register(visionAI, { prefix: "/vision-ai" });
};

export default controllers;
