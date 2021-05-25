import Item from './Item'

const List = ({ listData, deleteData, submittingStatus }) => {
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
            submittingStatus={submittingStatus}
          ></Item>
        )
      })}
    </div>
  )
}

export default List
