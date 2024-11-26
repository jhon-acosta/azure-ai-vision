import type { FastifyRequest, FastifyServerOptions } from "fastify";

export const __DEV__ = process.env.NODE_ENV !== "production";

/**
 * Variables de entorno
 */
export const configs = {
  HOST: process.env.HOST || "0.0.0.0",
  PORT: parseInt(process.env.PORT || "3007"),
};

/**
 * @see https://www.npmjs.com/package/pino-pretty
 */
export const logger: FastifyServerOptions["logger"] = __DEV__
  ? {
      transport: {
        target: "pino-pretty",
        options: {
          colorize: true,
          ignore: "hostname,pid,reqId,responseTime",
          singleLine: true,
          translateTime: "SYS:dd/mm/yy HH:MM",
        },
      },
      serializers: {
        req(request: FastifyRequest) {
          return {
            method: request.method,
            url: request.url,
            authorization: request.headers.authorization
              ? "autorizado"
              : "sin autorización",
          };
        },
      },
    }
  : {};
