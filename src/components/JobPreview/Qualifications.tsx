function Qualifications({ qualifications }: { qualifications: string[] }) {
  return (
    <div className="grid grid-cols-3 mb-8">
      <div className="col-span-1">
        <h1 className="text-lg font-bold mb-1.5">Qualifications</h1>
        <p>other qualifications may apply</p>
      </div>

      <div className="col-span-2 p-1">
        {qualifications.map((qualification, index) => (
          <p key={index} className="inline-block mr-1 mb-1.5 p-1.5 bg-gray-200">
            {qualification}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Qualifications;
