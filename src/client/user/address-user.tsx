export default function AddressUser() {
  return (
    <div className="space-y-6">
      <div className="space-y-6">
        {[1, 2].map((i) => {
          return (
            <div key={i} className="section-address space-y-4 border-b pb-6 last:pb-0 last:border-b-0">
              <div className="section-header font-bold flex gap-4">
                <button>Ranti</button>
                <button className="text-gray-normal">Default</button>
              </div>
              <div className="body">Jl Raya Alternatif Cibubur Ruko Kranggan Permai 16-18, Dki Jakarta, Dki Jakarta, Jakarta, 16963, Indonesia 0218448612</div>
              <div className="footer flex gap-4">
                <button className="text-primary">Edit</button>
                <button className="text-primary">Delete</button>
              </div>
            </div>
          );
        })}
      </div>
      <button className="py-3 text-base text-dark bg-primary-others font-garnet font-bold leading-7 w-full">Add New Address</button>
    </div>
  );
}
