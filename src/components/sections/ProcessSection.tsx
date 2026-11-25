import { motion } from 'framer-motion';
import { revealGroupVariants, revealItemVariants } from './motionVariants';

const procurementSteps = [
  {
    number: '01',
    title: 'Understand the requirement',
    description:
      'Confirm product specification, quantities, delivery requirements and contractual terms.',
  },
  {
    number: '02',
    title: 'Identify & check suppliers',
    description:
      'Seek competitive quotations and verify supply capacity, lead times and standards.',
  },
  {
    number: '03',
    title: 'Build a viable offer',
    description:
      'Evaluate total landed cost, margin, financing need, warranty obligations and payment risk.',
  },
  {
    number: '04',
    title: 'Execute the contract',
    description:
      'Document the order, manage quality and delivery, invoice correctly and retain records.',
  },
  {
    number: '05',
    title: 'Build continuity',
    description:
      'Develop repeat business through reliable communication and transaction performance.',
  },
];

export function ProcessSection() {
  return (
    <motion.section
      className="process-section"
      id="process"
      variants={revealGroupVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="process-heading" variants={revealItemVariants}>
        <span className="eyebrow eyebrow--panel">How we work</span>
        <h2>A clear path from requirement to repeat business</h2>
      </motion.div>
      <motion.div className="process-grid" role="list" variants={revealGroupVariants}>
        {procurementSteps.map((step) => (
          <motion.article
            className="process-card"
            key={step.number}
            role="listitem"
            variants={revealItemVariants}
            whileHover={{ y: -3 }}
          >
            <span>{step.number}</span>
            <h2>{step.title}</h2>
            <p>{step.description}</p>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}
