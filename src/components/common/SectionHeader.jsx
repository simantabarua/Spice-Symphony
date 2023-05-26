

const SectionHeader = ({title, subtitle}) => {
  return (
      <div className="space-y-4 w-ful flex flex-col justify-center items-center my-12">
          <p className="text-orange-400">---{ subtitle}---</p>
          <h2 className="text-4xl uppercase border-y-2 py-2 font-bold">{ title}</h2>
    </div>
  )
}

export default SectionHeader