import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

const socialLinks = [
    { name: "GitHub", href: "https://github.com/jenilrupapara001", icon: Github },
    { name: "LinkedIn", href: "https://jenilrupapara.netlify.app", icon: Linkedin }, // Using existing portfolio as placeholder or actual LinkedIn if avail
    { name: "Email", href: "mailto:jenilrupapara340@gmail.com", icon: Mail },
    // { name: "Twitter", href: "#", icon: Twitter },
];

export default function Footer() {
    return (
        <footer className="bg-background border-t border-gray-200 dark:border-gray-800 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-left">
                    <p className="text-sm text-foreground/60">
                        &copy; {new Date().getFullYear()} Jenil Rupapara. All rights reserved.
                    </p>
                </div>

                <div className="flex space-x-6">
                    {socialLinks.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground/60 hover:text-primary transition-colors"
                        >
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-5 w-5" />
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}
