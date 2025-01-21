import { Alert, Progress, notification } from 'antd'

import classes from '../../styles/ui.module.scss'

const AppSpin = ({ scale }) => (
  <div className={classes['progress-loading']}>
    <Progress
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068',
      }}
      percent={scale}
    />
  </div>
)

const AppNotification = () => {
  return notification['success']({
    message: 'Данные успешно загружены',
    description: '',
    duration: 4,
  })
}

const AppError = ({ error }) => (
  <div>
    <Alert
      className={classes['warning-error']}
      message="Предупреждение"
      description={`${error}. Попробуйте перезагрузить страницу!`}
      type="warning"
      showIcon
      closable
    />
  </div>
)

export { AppError, AppSpin, AppNotification }
