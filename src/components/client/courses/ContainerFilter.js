import classNames from 'classnames';
import { FilterItems } from './FilterItems';


export function ContainerFilter({ openFilter }) {

  const classFilter = classNames('container__filter container__filter__body', {
    'show': openFilter,
    'hide': !openFilter
  })

  return (
    <div className={classFilter}>
      <FilterItems />
    </div>
  )
}
