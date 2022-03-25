import classNames from 'classnames';
import { useLayoutEffect, useRef } from 'react';
import { FilterItems } from './FilterItems';


export function ContainerFilter({ openFilter, setHeightToFilter }) {

  const containerFilterRef = useRef()

  const classFilter = classNames('container__filter container__filter__body', {
    'show': openFilter,
    'hide': !openFilter
  })

  useLayoutEffect(() => {
    const value = containerFilterRef.current.clientHeight
    setHeightToFilter(value)
  }, [setHeightToFilter])

  return (
    <div ref={containerFilterRef} className={classFilter}>
      <FilterItems />
    </div>
  )
}
