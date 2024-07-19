function CompanyReviews({ reviews }: { reviews: string[] }) {
  return (
    <div className="grid grid-cols-3 mt-2">
      <div className="col-span-1">
        <h1 className="text-lg font-bold mb-1.5">Company reviews</h1>
        <p>Recent things people are saying</p>
      </div>
      <div className="col-span-2 grid grid-cols-2 pl-1 italic">
        {reviews.map((review, index) => (
          <div key={index} className="mb-2 pr-4">
            {review}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompanyReviews;
