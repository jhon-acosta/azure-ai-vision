import type { FastifyPluginAsync } from "fastify";

const visionAI: FastifyPluginAsync = async (instance) => {
  instance.get("/", async (request, reply) => {
    reply.send("Vision AI");
  });
};

export default visionAI;
