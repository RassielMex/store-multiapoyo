import zod from "zod";

export const loginSchema = zod.object({
  password: zod
    .string({
      required_error: "Password es requerido",
      message: "Password invalido",
    })
    .min(4, { message: "Debe tener 4 o más caracteres" }),
  email: zod
    .string({ required_error: "Email es requerido" })
    .email({ message: "Email invalido" }),
});
