import { PrismaClient } from "@prisma/client"

// export const prisma = new PrismaClient({
//   log: ["query"],
// })

declare const global: Global & { prisma?: PrismaClient }

export let prisma: PrismaClient

if (typeof window === "undefined") {
  if (process.env["NODE_ENV"] === "production") {
    prisma = new PrismaClient({
      log: ["query"],
    })
  } else {
    if (!global.prisma) {
      global.prisma = new PrismaClient({
        log: ["query"],
      })
    }
    prisma = global.prisma
  }
}
