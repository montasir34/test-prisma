"use server";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "./db";
// import { cookies } from "next/headers";
import { json } from "stream/consumers";
const LoginSchema = z.object({
  name: z.string({
    required_error: "الرجاء ادخال الاسم",
  }),
  password: z.string({
    required_error: "الرجاء ادخال كلمه السر",
  }),
});

const CreateConsumableSchema = z.object({
  title: z.string({
    required_error: "الرجاء ادخال اسم السلعه",
  }),
  prize: z.coerce.number({
    required_error: "الرجاء ادخال السعر",
  }),
  note: z.string(),
  financial_status: z.enum(["CASH", "DEBT"], {
    required_error: "الرجاء اختيار حاله",
  }),
});
const CreateRetrivedTicketsSchema = z.object({
  title: z.string({
    invalid_type_error: "الرجاء ادخال اسم الصنف",
  }),
  count: z.coerce.number({
    invalid_type_error: "الرجاء ادخال العدد",
  }),
  reviewedBy: z.string({
    invalid_type_error: "الرجاء ادخال اسم المراجع",
  }),
  note: z.string(),
});
export type State = {
  errors?: {
    title?: string[];
    count?: string[];
    prize?: string[];
    name?: string[];
    password?: string[];
    note?: string[];
    reviewedBy?: string[];
    financial_status?: string[]
  };
  message?: string | null;
};

// export async function logout(){ 
// // const cookiesStore = cookies();

//   cookiesStore.delete('user')
//   redirect('/')
// }
export async function login(prevStat: State, formData: FormData) {

  const validateFields = LoginSchema.safeParse({
    name: formData.get("name"),
    password: formData.get("password"),
  });

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Missing field",
    };
  }
  const { name, password } = validateFields.data;
  const user = await prisma.user.findFirst({
    where: {
      name,
    },
  });
  // console.log(JSON.stringify(user))

  // cookies().set({
  //   name: "user",
  //   value: JSON.stringify(user),
  //   httpOnly: true,
  //   path: "/",
  // });
  redirect("/dashboard");
}
export async function CreateConsumable(prevStat: State, formData: FormData) {
  const validateFields = CreateConsumableSchema.safeParse({
    title: formData.get("title"),
    prize: formData.get("prize"),
    note: formData.get("note"),
    financial_status: formData.get("financial_status"),
  });
console.log(validateFields)
  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Missing Field",
    };
  }
  const { title, prize, financial_status, note,  } = validateFields.data;

  await prisma.consumable.create({
    data: {
      title,
      prize,
      financial_status,
      note
    },
  });
  revalidatePath("/dashboard");
  redirect("/dashboard");
}
export async function CreateRetrivedTickets(prevStat: State, formData: FormData) {
  const validateFields = CreateRetrivedTicketsSchema.safeParse({
    title: formData.get("title"),
    count: formData.get("count"),
    note: formData.get("note"),
    reviewedBy: formData.get("reviewedBy"),
  });
  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Missing Field",
    };
  }
  const { title, count, note, reviewedBy } = validateFields.data;

  await prisma.retrived_tikets.create({
    data: {
      title,
      count,
      reviewedBy,
      note
    },
  });
  revalidatePath("/dashboard");
  redirect("/dashboard");
}
