import APControl from '@/app/_ui/home/APControl'
import STAControl from '@/app/_ui/home/STAControl'
import ControlLoading from '@/app/_ui/home/ControlLoading'
import TelnetConsole from '@/app/_ui/home/TelnetConsole'
import { useSelector } from 'react-redux'
import { HomeStoreState } from '@/app/_utils/home/store'
export default function ConnectionControl() {
    const [id, type, controlPanal] = useSelector((state: HomeStoreState) => [
        state.graph.id,
        state.graph.type,
        state.graph.controlPanal,
    ])
    if (!id) return <ControlLoading />
    switch (type) {
        case 'ap':
            if (controlPanal === 'default') {
                return <APControl />
            } else {
                return <TelnetConsole />
            }
        case 'sta':
            return <STAControl />
        default:
            return <ControlLoading />
    }
}
