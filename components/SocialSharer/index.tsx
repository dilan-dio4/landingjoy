import React from "react";
import { IoLogoTwitter, IoLogoLinkedin, IoLogoFacebook, IoLogoWhatsapp } from 'react-icons/io5';
import { OldHeroSecondaryButton } from '../Buttons';
import clsx from 'clsx';

function SingleButton({ href, icon }: { href: string; icon: JSX.Element }) {
    return (
        <OldHeroSecondaryButton
            endIcon={icon}
            className="!w-[50px] !h-[50px] !mr-3"
            href={href}
        />
    )
}
// https://dev.to/shahednasser/how-to-easily-add-share-links-for-each-social-media-platform-1l4f
export default function SocialSharer({ path, title, className }: { path: string; title: string; className?: string; }) {
    return (
        <div className={clsx(className)}>
            <h6 className="font-bold text-2xl mb-4">Share</h6>
            <div className="flex">
                <SingleButton
                    href={`https://twitter.com/share/?url=https://landingjoy.com${encodeURIComponent(path)}&text=${encodeURIComponent(title)}&via=Landingjoy`}
                    icon={<IoLogoTwitter className="text-2xl" />}
                />
                <SingleButton
                    href={`https://www.facebook.com/sharer/sharer.php?u=landingjoy.com`}
                    icon={<IoLogoFacebook className="text-2xl" />}
                />
                <SingleButton
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=https://landingjoy.com${encodeURIComponent(path)}&title=${encodeURIComponent(title)}&source=Landingjoy`}
                    icon={<IoLogoLinkedin className="text-2xl" />}
                />
                <SingleButton
                    href={`https://wa.me/?text=https://landingjoy.com${encodeURIComponent(path)}`}
                    icon={<IoLogoWhatsapp className="text-2xl" />}
                />
            </div>
        </div>
    )
}