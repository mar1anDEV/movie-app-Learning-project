import type { ReactNode } from "react"

interface PageProps{
    classSpecial: string,
    children?: ReactNode
}

function PageLayoutSpecial({classSpecial,children}:PageProps) {
  return (
    <div className={`${classSpecial} min-h-screen relative`}>
        <div className="absolute inset-0 flex flex-col">
          <div className="h-[96px]"></div>
          <div className="grow p-4">
            {children}
          </div>
        </div>
      </div>
  )
}

export default PageLayoutSpecial