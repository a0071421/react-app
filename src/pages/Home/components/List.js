import Item from './Item'

const List = ({ listData, deleteData }) => {
  return (
    <div className="list">
      {listData.map((item) => {
        const { id, note, date, time } = item
        return (
          <Item
            id={id}
            key={id}
            note={note}
            date={date}
            time={time}
            deleteData={deleteData}
          ></Item>
        )
      })}
    </div>
  )
}

export default List
