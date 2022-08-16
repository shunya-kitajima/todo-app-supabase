export type Task = {
  id: string
  created_ad: string
  title: string
  user_id: string | undefined
}

export type Notice = {
  id: string
  created_ad: string
  content: string
  user_id: string | undefined
}
