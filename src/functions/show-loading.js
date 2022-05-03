import { Loading } from 'quasar'

export function showLoading (isLoading) {
  if (isLoading) {
    Loading.show({
      message: 'Em progresso...',
      spinner: 'dots'
    })
  } else {
    Loading.hide()
  }
}