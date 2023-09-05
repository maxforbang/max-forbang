import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const emailRouter = createTRPCRouter({
  send: publicProcedure
    // .input(z.object({ text: z.string() }))
    // .mutation(async ({ input, ctx }) => {
    .mutation(async ({ ctx }) => {
      try {
        // const response = await ctx.resend.emails.send({
        await ctx.resend.emails.send({
          // from: "max@strukter.io",
          // to: "max@strukter.io",
          from: "onboarding@resend.dev",
          to: "maxforbangdev@gmail.com",
          subject: "Personal Website Inquiry",
          html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
        });

        return { success: true };
      } catch (error) {
        return { success: false, error: error };
      }
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
});
