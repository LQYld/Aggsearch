import './styles.css'
export default function LogoComponent() {
  const logoLetterList = ['A', 'g', 'g', 's', 'e', 'a', 'r', 'c', 'h']
  return (
    <>
      <div className="foo cursor-default">
        {logoLetterList.map((el, eleIndex) => {
          return (
            <p
              className="letter cursor-default"
              data-letter={el}
              key={`logo_component_${eleIndex}`}
            >
              {el}
            </p>
          )
        })}
      </div>
    </>
  )
}
