import { useEffect, useState } from 'react'
import APControl from '@/app/_ui/home/APControl'
import STAControl from '@/app/_ui/home/STAControl'
import ControlLoading from '@/app/_ui/home/ControlLoading'
import TelnetConsole from '@/app/_ui/home/TelnetConsole'

export default function ConnectionControl({ id }: { id: string | null }) {
    const [type, setType] = useState<'sta' | 'ap'>()
    const [controlPanal, setControlPanal] = useState<'default' | 'telnet'>(
        'telnet',
    )
    useEffect(() => {
        fetchData().then((type) => setType(type))
        async function fetchData() {
            const data = await (
                await fetch(`http://localhost:8080/api/nodeType/${id}`)
            ).json()
            switch (data['type']) {
                case 'ap':
                    return 'ap'
                case 'sta':
                    return 'sta'
                default:
                    break
            }
        }
    }, [id])
    if (!id) return <ControlLoading />
    switch (type) {
        case 'ap':
            if (controlPanal === 'default') {
                return <APControl id={id} />
            } else {
                return <TelnetConsole id={id} />
            }
        case 'sta':
            return <STAControl id={id} />
        default:
            return <ControlLoading />
    }
}
