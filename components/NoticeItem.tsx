import React from 'react'
import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid'
import useStore from '../store'
import { useMutateNotice } from '../hooks/useMutateNotices'
import { Notice } from '../types/types'

export const NoticeItem: React.FC<Omit<Notice, 'created_at' | 'user_id'>> = ({
  id,
  content,
}) => {
  const update = useStore((state) => state.updateEditedNotice)
  const { deleteNoticeMutation } = useMutateNotice()

  return (
    <li className="my-3 text-lg font-extrabold">
      <span>{content}</span>
      <div className="float-right ml-20 flex">
        <PencilAltIcon
          className="mx-1 h-5 w-5 cursor-pointer text-blue-500"
          onClick={() => {
            update({
              id: id,
              content: content,
            })
          }}
        />
        <TrashIcon
          className="h-5 w-5 cursor-pointer text-blue-500"
          onClick={() => {
            deleteNoticeMutation.mutate(id)
          }}
        />
      </div>
    </li>
  )
}
