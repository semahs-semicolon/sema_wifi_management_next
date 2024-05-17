export default function ControlButton({
    text,
    onClick,
    bgColor = 'bg-zinc-200',
    bgHoverColor = 'bg-zinc-300',
}: {
    text: string
    onClick: () => void
    bgColor?: string
    bgHoverColor?: string
}) {
    return (
        <div
            className={`flex h-full w-full items-center justify-center rounded-lg ${bgColor} hover:${bgHoverColor}`}
            onClick={onClick}
        >
            <span className="text-sm font-normal">{text}</span>
        </div>
    )
}
