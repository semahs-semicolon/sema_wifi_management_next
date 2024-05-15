export default function ControlButton({
    text,
    onClick,
}: {
    text: string
    onClick: () => void
}) {
    return (
        <div
            className="flex h-full w-full items-center justify-center rounded-lg bg-zinc-200 hover:bg-zinc-300"
            onClick={onClick}
        >
            <span className="text-sm font-normal">{text}</span>
        </div>
    )
}
