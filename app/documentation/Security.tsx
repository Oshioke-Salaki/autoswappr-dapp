export default function Security() {
  return (
    <div className="grid gap-5 text-[#DCDFE1]">
      <div className="grid gap-2 font-normal leading-6 text-sm">
        <h3 className="font-semibold text-sm leading-6">
          AutoswapAudit Reports
        </h3>
        <p className="">Our smart contracts have been audited by Certik.</p>
      </div>
      <div className="grid gap-2 font-normal leading-6 text-sm">
        <h3 className="font-semibold text-sm leading-6">Encryption</h3>
        <p className="">All user data is encrypted using AES-256.</p>
      </div>
      <div className="grid gap-2 font-normal leading-6 text-sm">
        <h3 className="font-semibold text-sm leading-6">Non-Custodial</h3>
        <p className="">
          Users retain complete control over their funds at all times.
        </p>
      </div>
    </div>
  );
}
