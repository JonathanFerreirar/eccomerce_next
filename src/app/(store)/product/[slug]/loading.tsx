import Skeleton from '@/components/skeleton'

const Loading = () => {
  return (
    <div className="relative grid max-h-[860px] grid-cols-3 gap-12">
      <Skeleton className="col-span-2 overflow-hidden h-[680px]" />
      <Skeleton className="flex flex-col w-[400px] h-[400px] items-center justify-center px-12 absolute bottom-[40%] translate-y-[50%] right-0" />
    </div>
  )
}

export default Loading
