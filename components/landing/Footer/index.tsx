import Icons from "@/components/common/Icons";
import ModeToggle from "@/components/common/ModeToggle";
import { footerLinks, socialLinks } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { HTMLAttributes } from "react";

const Footer = ({ className }: HTMLAttributes<HTMLElement>) => {
    return (
        <footer className={cn("border-t", className)}>
            <div className="container grid max-w-6xl grid-cols-2 gap-6 py-14 md:grid-cols-3">
                {footerLinks.map((section) => (
                    <div key={section.title}>
                        <span className="text-sm font-medium text-foreground">
                            {section.title}
                        </span>
                        <ul className="mt-4 list-inside space-y-3">
                            {section.items?.map((link) => (
                                <li key={link.title}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="border-t py-4">
                <div className="container flex max-w-6xl items-center justify-between">
                    <p className="text-left text-sm text-muted-foreground">
                        Built by{" "}
                        <Link
                            href={`#`}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4"
                        >
                            mickasmt
                        </Link>
                        . Hosted on{" "}
                        <Link
                            href="https://vercel.com"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4"
                        >
                            Vercel
                        </Link>
                        . Illustrations by{" "}
                        <Link
                            href="https://popsy.co"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4"
                        >
                            Popsy
                        </Link>
                    </p>

                    <div className="flex items-center gap-3">
                        <Link
                            href={socialLinks.github}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4"
                        >
                            <Icons.gitHub className="size-5" />
                        </Link>
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;