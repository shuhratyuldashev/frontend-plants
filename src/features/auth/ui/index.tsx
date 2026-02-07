import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2 } from "lucide-react";

import { Button } from "@/shared/ui/button";
import {
  Field,
  FieldContent,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldLegend,
} from "@/shared/ui/field";
import { Input } from "@/shared/ui/input";

// ---------------- Schemas ----------------

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const registerSchema = z
  .object({
    username: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string(),
  })
  .refine((d) => d.password === d.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// ---------------- Types ----------------

type LoginFormValues = z.infer<typeof loginSchema>;
type RegisterFormValues = z.infer<typeof registerSchema>;

// ========================================================
// LOGIN
// ========================================================

export function LoginForm() {
  const [loading, setLoading] = React.useState(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  async function onSubmit(data: LoginFormValues) {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    console.log(data);
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <FieldGroup>
        <FieldSet>
          <FieldLegend>Login</FieldLegend>

          <FieldGroup>
            <Field>
              <FieldLabel>Email</FieldLabel>

              <FieldContent>
                <Input {...register("email")} placeholder="name@mail.com" />
                {errors.email && (
                  <FieldError>{errors.email.message}</FieldError>
                )}
              </FieldContent>
            </Field>

            <Field>
              <FieldLabel>Password</FieldLabel>

              <FieldContent>
                <Input
                  type="password"
                  {...register("password")}
                  placeholder="••••••••"
                />
                {errors.password && (
                  <FieldError>{errors.password.message}</FieldError>
                )}
              </FieldContent>
            </Field>
          </FieldGroup>
        </FieldSet>

        <Button type="submit" disabled={loading}>
          {loading && <Loader2 className="mr-2 animate-spin" />}
          Sign In
        </Button>
      </FieldGroup>
    </form>
  );
}

// ========================================================
// REGISTER
// ========================================================

export function RegisterForm() {
  const [loading, setLoading] = React.useState(false);

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  async function onSubmit(data: RegisterFormValues) {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    console.log(data);
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <FieldGroup>
        <FieldSet>
          <FieldLegend>Create Account</FieldLegend>

          <FieldGroup>
            <Field>
              <FieldLabel>Username</FieldLabel>

              <FieldContent>
                <Input {...register("username")} />
                {errors.username && (
                  <FieldError>{errors.username.message}</FieldError>
                )}
              </FieldContent>
            </Field>

            <Field>
              <FieldLabel>Email</FieldLabel>

              <FieldContent>
                <Input {...register("email")} />
                {errors.email && (
                  <FieldError>{errors.email.message}</FieldError>
                )}
              </FieldContent>
            </Field>

            <div className="grid md:grid-cols-2 gap-4">
              <Field>
                <FieldLabel>Password</FieldLabel>

                <FieldContent>
                  <Input type="password" {...register("password")} />
                  {errors.password && (
                    <FieldError>{errors.password.message}</FieldError>
                  )}
                </FieldContent>
              </Field>

              <Field>
                <FieldLabel>Confirm Password</FieldLabel>

                <FieldContent>
                  <Input type="password" {...register("confirmPassword")} />
                  {errors.confirmPassword && (
                    <FieldError>{errors.confirmPassword.message}</FieldError>
                  )}
                </FieldContent>
              </Field>
            </div>
          </FieldGroup>
        </FieldSet>

        <Button type="submit" disabled={loading}>
          {loading && <Loader2 className="mr-2 animate-spin" />}
          Register
        </Button>
      </FieldGroup>
    </form>
  );
}
