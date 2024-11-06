import BackdropGradient from "@/components/global/backdrop-gradient";
import GlassCard from "@/components/global/glass-card";
import GradientText from "@/components/global/gradient-text";
import { GROUPLE_CONSTANTS } from "@/constants";

type Props = {
  children: React.ReactNode;
};

const CreateGroupLayout = ({ children }: Props) => {
  return (
    <div className="container h-screen grid grid-cols-1 gap-5 lg:grid-cols-2 content-center">
      <div className="flex items-center">
        <BackdropGradient className="w-8/12 h-2/6 opacity-50">
          <h5 className="text-2xl font-bold text-themeTextWhite">
            C-Challenge
          </h5>
          <GradientText element="H2" className="text-4xl font-semibold py-1">
            Create Your First Course
          </GradientText>
          <p className="text-themeTextGray">
            Create your first course on C programming by introducing the
            fundamentals of the language, including syntax, data types,
            variables, control structures, and functions. Start with simple
            programs and gradually guide students through more complex topics
            like pointers, memory management, and file handling.
          </p>
          <div className="flex flex-col gap-3 mt-16 pl-5">
            {GROUPLE_CONSTANTS.createGroupPlaceholder.map((placeholder) => (
              <div className="flex gap-3" key={placeholder.id}>
                {placeholder.icon}
                <p className="text-themeTextGray">{placeholder.label}</p>
              </div>
            ))}
          </div>
        </BackdropGradient>
      </div>
      <div>
        <BackdropGradient
          className="w-6/12 h-3/6 opacity-40"
          container="lg:items-center"
        >
          <GlassCard className="xs:w-full lg:w-10/12 mt-16 py-5 px-5">
            {children}
          </GlassCard>
        </BackdropGradient>
      </div>
    </div>
  );
};

export default CreateGroupLayout;
