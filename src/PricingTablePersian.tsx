import {
  Card,
  CardContent,
  CardHeader,

} from "@/components/ui/card"
import { Check, X } from 'lucide-react';


export default function PricingTablePersian() {
  const plans = [
    {
      name: "پلن پایه",
      price: 99000,
      period: "ماهانه",
      features: [
        { name: "۵ کاربر همزمان", included: true },
        { name: "۱۰ گیگابایت فضا", included: true },
        { name: "پشتیبانی ایمیلی", included: true },
        { name: "پشتیبانی تلفنی", included: false },
        { name: "دسترسی به API", included: false },
      ],
      recommended: false,
    },
    {
      name: "پلن حرفه‌ای",
      price: 299000,
      period: "ماهانه",
      features: [
        { name: "۲۰ کاربر همزمان", included: true },
        { name: "۵۰ گیگابایت فضا", included: true },
        { name: "پشتیبانی ایمیلی", included: true },
        { name: "پشتیبانی تلفنی", included: true },
        { name: "دسترسی به API", included: false },
      ],
      recommended: true,
    },
    {
      name: "پلن سازمانی",
      price: 599000,
      period: "ماهانه",
      features: [
        { name: "کاربران نامحدود", included: true },
        { name: "فضای نامحدود", included: true },
        { name: "پشتیبانی ایمیلی", included: true },
        { name: "پشتیبانی تلفنی ۲۴/۷", included: true },
        { name: "دسترسی به API", included: true },
      ],
      recommended: false,
    }
  ];

  function convertToPersianNumber(num: number): string {
    return num.toString().replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[parseInt(d)])
  }
  return (
    <div className="w-full max-w-6xl mx-auto p-4 font-vazir"
    style={{ direction: 'rtl', textAlign: 'right' }}>
      <div className="text-center mb-12">
      <h2 className="text-3xl font-bold  mb-8">پلن‌های قیمتی</h2>
      <h3 className="text-4xl font-bold  mt-2">طرح های قیمتی</h3>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          بهترین طرحی که مناسب نیاز شماست را برگزینید و از فرآیند
          خلاقانه طوفان ذهنی پروژه خودتان لذت ببرید.
        </p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`relative ${plan.recommended ? 'border-2 border-blue-500' : ''}`}
          >
            {plan.recommended && (
              <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg">
                پیشنهاد ویژه
              </div>
            )}
            <CardHeader>
              <h3 className="text-xl font-bold text-center">{plan.name}</h3>
              <div className="text-center mt-4">
                <span className="text-3xl font-bold font-vazir numerals-persian" style={{fontFeatureSettings: "'numr' on"}}>{convertToPersianNumber(plan.price)}</span>
                <span className="text-gray-600"> تومان / {plan.period}</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {feature.included ? (
                      <Check className="text-green-500" size={20} />
                    ) : (
                      <X className="text-red-500" size={20} />
                    )}
                    <span>{feature.name}</span>
                  </div>
                ))}
              </div>
              <button className={`w-full mt-6 py-2 px-4 rounded-lg ${plan.recommended
                ? 'bg-blue-500 hover:bg-blue-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}>
                انتخاب پلن
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-12">
        <span>به یک طرح سفارشی نیاز دارید؟</span>
        <a href="https://www.linkedin.com/in/seyedahmaddv"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800">
          در تماس باشید
        </a>
      </div>
    </div>
  );
};

