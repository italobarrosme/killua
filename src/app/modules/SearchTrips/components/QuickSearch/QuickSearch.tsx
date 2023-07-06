import { MarkTitle } from "@/components/MarkTitle"
import { Icon } from '@iconify/react'
import { CategorySearch } from "@/modules/SearchTrips/types"

type QuickSearchProps = {
  categories: CategorySearch[]
}

export const QuickSearch = ({
  categories
}: QuickSearchProps) => {


  return (
    <div className="w-full">
       <MarkTitle label="Tente pesquisar por" />
       <ul className="flex items-center justify-evenly gap-2">
       {categories ? categories.map((category: CategorySearch) => (
            <li  key={category.id} className="flex flex-col items-center gap-2" onClick={
              category.onClick
            }>
              <Icon icon={category.icon} width={28} className="text-brand-grays-400"/>
              <p>{category.label}</p>
            </li>
         )): null}
         </ul>
    </div>
  )
}