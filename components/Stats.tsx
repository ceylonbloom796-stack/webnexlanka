
import React from 'react';
import { BarChart, Bar, ResponsiveContainer, Cell, Tooltip } from 'recharts';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 900 },
  { name: 'Jul', value: 1200 },
];

const Stats: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="glass rounded-[3rem] p-12 overflow-hidden relative animate-fade-in-up opacity-0">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-black mb-6 animate-fade-in-up opacity-0 stagger-1">Empowering Digital Growth</h3>
            <div className="grid grid-cols-2 gap-8 mb-8">
              {[
                { label: 'Projects Launched', value: '150+', color: 'text-blue-500' },
                { label: 'Client Retention', value: '98%', color: 'text-purple-500' },
                { label: 'Lines of Code', value: '24M', color: 'text-pink-500' },
                { label: 'Average Rating', value: '4.9/5', color: 'text-emerald-500' }
              ].map((stat, i) => (
                <div key={i} className={`animate-scale-in opacity-0 stagger-${i + 1}`}>
                  <div className={`text-4xl font-black ${stat.color} mb-1 transition-transform hover:scale-110 inline-block cursor-default`}>{stat.value}</div>
                  <div className="text-sm text-slate-400 font-bold uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
            <p className="text-slate-400 animate-fade-in-up opacity-0 stagger-3">
              Our data-driven approach has helped businesses scale their digital presence by an average of 300% within the first year of deployment.
            </p>
          </div>

          <div className="h-[300px] w-full bg-slate-900/40 rounded-3xl p-6 border border-white/5 relative group animate-scale-in opacity-0 stagger-4">
            <div className="absolute top-4 left-6 text-xs font-bold text-slate-500 uppercase tracking-widest z-10">Client Conversion Index</div>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <Tooltip 
                  cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ color: '#60a5fa' }}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]} animationDuration={2000} animationBegin={500}>
                  {data.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={index === data.length - 1 ? '#3b82f6' : '#1e293b'} 
                      className="hover:fill-blue-400 transition-all duration-500 cursor-pointer"
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
