import Image from "next/image";

export default function WorkedWithBrands() {
  return (
    <div className="brand-area">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <h2>
              <div className="brand-title">International Brands</div>
            </h2>
            <h3>
              We are happy to work with global <br /> largest brands
            </h3>
          </div>
          <div className="brand-list">
            <div>
              <Image
                src={`/images/brand1.png`}
                alt="Brand1"
                width={97}
                height={67}
              />
            </div>
            <div>
              <Image
                src={`/images/brand2.png`}
                alt="Brand2"
                width={97}
                height={67}
              />
            </div>
            <div>
              <Image
                src={`/images/brand3.png`}
                alt="Brand3"
                width={97}
                height={67}
              />
            </div>
            <div>
              <Image
                src={`/images/brand4.png`}
                alt="Brand4"
                width={97}
                height={67}
              />
            </div>
            <div>
              <Image
                src={`/images/brand5.png`}
                alt="Brand5"
                width={97}
                height={67}
              />
            </div>
            <div>
              <Image
                src={`/images/brand6.png`}
                alt="Brand6"
                width={97}
                height={67}
              />
            </div>
            <div>
              <Image
                src={`/images/brand6.png`}
                alt="Brand6"
                width={97}
                height={67}
              />
            </div>
            <div>
              <Image
                src={`/images/brand5.png`}
                alt="Brand5"
                width={97}
                height={67}
              />
            </div>
            <div>
              <Image
                src={`/images/brand4.png`}
                alt="Brand4"
                width={97}
                height={67}
              />
            </div>
            <div>
              <Image
                src={`/images/brand3.png`}
                alt="Brand3"
                width={97}
                height={67}
              />
            </div>
            <div>
              <Image
                src={`/images/brand2.png`}
                alt="Brand2"
                width={97}
                height={67}
              />
            </div>
            <div>
              <Image
                src={`/images/brand1.png`}
                alt="Brand1"
                width={97}
                height={67}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
