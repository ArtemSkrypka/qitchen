import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as stylex from "@stylexjs/stylex";
import { colors, fonts } from "../tokens.stylex";
import InputMask from "react-input-mask";
import Button from "./Button";

const formStyle = stylex.create({
  default: {
    display: "flex",
    flexDirection: "column",
    gap: "1.6rem",
  },
});

const inputStyle = stylex.create({
  default: {
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: colors.borderDefault,
    borderRadius: "10px",
    padding: "16px 24px",
    fontFamily: fonts.Satoshi,
    color: colors.textDefault,
    backgroundColor: colors.backgroundMuted,
    outline: {
      default: "none",
      ":focus-visible": `1px solid white`,
    },
    "::placeholder": {
      color: colors.textDefault,
    },
  },
  error: {
    outlineColor: colors.error,
  },
});

const errorText = stylex.create({
  default: {
    color: colors.error,
  },
});

type FormValues = {
  name: string;
  email: string;
  date: string;
  guests: number;
  phone: string;
  time: string;
};

function isValidTimeFormat(value: string) {
  const timeRegex = /^(?:[01]\d|2[0-3]):[0-5]\d$/;
  return timeRegex.test(value);
}

function isValidPhoneNumber(phoneNumber: string) {
  const phonePattern = /^\(\d{3}\) \d{3}-\d{4}$/;
  return phonePattern.test(phoneNumber);
}

function isValidDateFormat(value: string) {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  return regex.test(value);
}

// Define a schema for form data using zod
const schema = z.object({
  name: z.string().min(1),
  email: z.string().email({ message: "Email errorr" }),
  date: z.string().refine(isValidDateFormat, {
    message: 'Invalid date format. Date should be in "YYYY-MM-DD" format.',
  }),
  guests: z.coerce
    .number()
    .positive()
    .gte(1)
    .lte(30, { message: "Guests errorr" }),
  phone: z.string().refine(isValidPhoneNumber, {
    message: "Invalid phone number",
  }),
  time: z.string().refine((value) => isValidTimeFormat(value), {
    message: "Invalid time format. Time should be in HH:MM format.",
  }),
});

export default function Form() {
  const {
    // Taking necessary things from useForm hook
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    // Give react-hook-form correct reslover (from zod) to use
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);
  console.log(errors);

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setTime(new Date()), 60000);
  }, []);

  return (
    <form
      {...stylex.props(formStyle.default)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        {...stylex.props(inputStyle.default, errors.name && inputStyle.error)}
        type="text"
        placeholder="Name"
        {...register("name", { required: true })}
      />
      {errors.name?.message ? (
        <p {...stylex.props(errorText.default)}>{errors.name.message}</p>
      ) : null}
      <InputMask
        {...stylex.props(inputStyle.default, errors.phone && inputStyle.error)}
        mask="(999) 999-9999"
        type="tel"
        placeholder="Phone number"
        id="phone"
        {...register("phone", { required: true })}
      />
      {errors.phone ? (
        <p {...stylex.props(errorText.default)}>{errors.phone.message}</p>
      ) : null}

      <input
        {...stylex.props(inputStyle.default)}
        type="email"
        placeholder="Email"
        {...register("email", { required: true })}
      />

      {errors.email ? (
        <p {...stylex.props(errorText.default)}>{errors.email.message}</p>
      ) : null}

      <input
        {...stylex.props(inputStyle.default)}
        type="number"
        min={1}
        placeholder="Guests"
        {...register("guests", { required: true })}
      />
      {errors.guests ? (
        <p {...stylex.props(errorText.default)}>{errors.guests.message}</p>
      ) : null}
      <input
        {...stylex.props(inputStyle.default)}
        type="date"
        placeholder="Date"
        min={new Date().toISOString().split("T")[0]} // Set min attribute to today's date
        {...register("date", { required: true })}
      />
      {errors.date ? (
        <p {...stylex.props(errorText.default)}>{errors.date.message}</p>
      ) : null}
      <input
        {...stylex.props(inputStyle.default)}
        type="time"
        placeholder="Time"
        min={time
          .toLocaleTimeString("en-US", { hour12: false })
          .substring(0, 5)}
        {...register("time", { required: true })}
      />
      {errors.time ? (
        <p {...stylex.props(errorText.default)}>{errors.time.message}</p>
      ) : null}
      <Button variant="primary" type="submit">
        Reserve
      </Button>
    </form>
  );
}
