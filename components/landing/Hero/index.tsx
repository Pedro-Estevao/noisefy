import Icons from "@/components/common/Icons";
import { buttonVariants } from "@/components/ui/button";
import { socialLinks } from "@/config/site";
import { cn, nFormatter } from "@/lib/utils";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="space-y-6 py-12 sm:py-20 lg:py-20">
            <div className="container flex max-w-5xl flex-col items-center gap-5 text-center">
                <Link
                    href="https://twitter.com/miickasmt/status/1810465801649938857"
                    className={cn(
                        buttonVariants({ variant: "outline", rounded: "full" }),
                        "px-4",
                    )}
                    target="_blank"
                >
                    <span className="mr-3">🎉</span>
                    <span className="hidden md:flex">Introducing&nbsp;</span> Next Auth
                    Roles Template on <Icons.twitter className="ml-2 size-3.5" />
                </Link>

                <h1 className="text-balance font-urban text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[66px]">
                    Kick off with a bang with{" "}
                    <span className="bg-[linear-gradient(90deg,#6366f1_0%,rgba(168,85,247,0.8)_100%)] bg-clip-text font-extrabold text-transparent">
                        SaaS Starter
                    </span>
                </h1>

                <p
                    className="max-w-2xl text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8"
                    style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
                >
                    Build your next project using Next.js 14, Prisma, Neon, Auth.js v5,
                    NodeMailer, React Email, Shadcn/ui, Stripe.
                </p>

                <div
                    className="flex justify-center space-x-2 md:space-x-4"
                    style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
                >
                    <Link
                        href="/pricing"
                        prefetch={true}
                        className={cn(
                            buttonVariants({ size: "lg", rounded: "full" }),
                            "gap-2",
                        )}
                    >
                        <span>Go Pricing</span>
                        <Icons.arrowRight className="size-4" />
                    </Link>
                    <Link
                        href={socialLinks.github}
                        target="_blank"
                        rel="noreferrer"
                        className={cn(
                            buttonVariants({
                                variant: "outline",
                                size: "lg",
                                rounded: "full",
                            }),
                            "px-5",
                        )}
                    >
                        <Icons.gitHub className="mr-2 size-4" />
                        <p>
                            <span className="hidden sm:inline-block">Star on</span> GitHub{" "}
                            <span className="font-semibold">{nFormatter(10008)}</span>
                        </p>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;