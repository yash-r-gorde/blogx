import { useState } from "react"
import clsx from "clsx";

interface Avatar {
    authorName: string;
    size?: number;
}

export const Avatar = ({ authorName, size = 9 }: Avatar) => {
    const [avatarInitials] = useState(authorName)
    return <div className={clsx(
        `relative inline-flex items-center justify-center w-${size} h-${size} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`,
        `w-${size}`,
        `h-${size}`,
    )}>
        <span className="font-medium text-gray-600 dark:text-gray-300">{avatarInitials.split(" ")[0][0].toUpperCase()}{avatarInitials.split(" ")[1][0].toUpperCase()}</span>
    </div>
}
