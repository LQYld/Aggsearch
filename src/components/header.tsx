import { Button, Toast } from '@douyinfe/semi-ui'
export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <div></div>
      <div>
        <Button onClick={() => Toast.warning({ content: 'welcome' })}>
          Hello Semi
        </Button>
      </div>
    </div>
  )
}
