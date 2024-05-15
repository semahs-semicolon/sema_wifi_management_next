export default function ControlLoading() {
    return (
        <div className="z-10 flex w-full flex-col bg-zinc-100 p-6 drop-shadow-2xl">
            <div className="flex animate-pulse flex-col gap-3">
                <div className="flex w-full animate-pulse items-center justify-between">
                    <div className="h-6 w-56 rounded-lg bg-zinc-500"></div>
                    <div className="h-8 w-8 rounded bg-zinc-500"></div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex w-full animate-pulse items-center gap-5">
                        <div className="h-4 w-36 rounded bg-zinc-400"></div>
                        <div className="h-4 w-4 rounded bg-zinc-400"></div>
                    </div>
                    <div className="flex w-full animate-pulse items-center gap-5">
                        <div className="h-4 w-36 rounded bg-zinc-400"></div>
                        <div className="h-4 w-4 rounded bg-zinc-400"></div>
                    </div>
                    <div className="flex w-full animate-pulse items-center gap-5">
                        <div className="h-4 w-36 rounded bg-zinc-400"></div>
                        <div className="h-4 w-4 rounded bg-zinc-400"></div>
                    </div>
                    <div className="flex w-full animate-pulse items-center gap-5">
                        <div className="h-4 w-36 rounded bg-zinc-400"></div>
                        <div className="h-4 w-4 rounded bg-zinc-400"></div>
                    </div>
                </div>
                <div className="grid w-full animate-pulse grid-cols-3 items-center gap-3">
                    <div className="h-6 w-full rounded-lg bg-zinc-300"></div>
                    <div className="h-6 w-full rounded-lg bg-zinc-300"></div>
                    <div className="h-6 w-full rounded-lg bg-zinc-300"></div>
                </div>
            </div>
        </div>
    )
}
