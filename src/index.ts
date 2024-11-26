import Debug from "debug";
import fastify from "fastify";
import cors from "@fastify/cors";
import controllers from "./controllers";
import formbody from "@fastify/formbody";
import { __DEV__, configs, logger } from "./configs";

if (__DEV__) Debug("server:index")?.("debug:activado");

const api = async () => {
  const instance = fastify({ logger: logger });
  instance.register(cors);
  instance.register(formbody);
  instance.register(controllers, { prefix: "/" });
  instance.get("/", (_, reply) => {
    reply.send("Servicio integrado con Azure AI Vision");
  });

  try {
    await instance.listen({ host: configs.HOST, port: configs.PORT });
    return instance;
  } catch (error) {
    instance.log.error(error);
    process.exit(1);
  }
};

await api();
