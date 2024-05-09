### DJS01: Mars Climate Orbiter Challenge

The Mars Climate Orbiter incident in 1999 is a stark reminder of the importance of precision in space missions, highlighting how a simple unit mismatch led to the loss of the spacecraft. This challenge simulates similar challenges in a spacecraft navigation system, emphasizing the need for accuracy in calculations.

#### Challenge Overview

This challenge involved debugging, refactoring, and enhancing JavaScript functions designed for determining the trajectory of a spacecraft. The initial functions were flawed and resulted in incorrect calculations.

##### Problem Areas Addressed

1. **Unit Mismatch**: Corrected unit conversions to ensure accurate calculations.
2. **Parameter Misalignment**: Refactored functions to handle parameters effectively, reducing the potential for unit mismatch errors.

##### Initial Parameters

- **Initial Velocity (`vel`)**: 10,000 km/h.
- **Acceleration (`acc`)**: 3 m/s².
- **Time (`time`)**: 3,600 seconds (equivalent to 1 hour).
- **Initial Distance (`d`)**: 0 km.
- **Initial Fuel (`fuel`)**: 5,000 kg.
- **Fuel Burn Rate (`fbr`)**: 0.5 kg/s.

##### Corrected Results

- **New Velocity**: Approximately 48,880 km/h.
- **New Distance**: Approximately 10,000 km.
- **Remaining Fuel**: Approximately 3,200 kg.

#### Solution Approach

- Implemented object destructuring in function parameters for clarity.
- Ensured accurate unit conversions within the functions.
- Corrected functions to address unit mismatches and parameter clarity.

#### Struggles and Lessons Learned

- **Struggle**: Initially, identifying the root cause of calculation inaccuracies was challenging due to the complexity of the code.
- **Lesson Learned**: Through careful examination and step-by-step debugging, I learned to systematically identify and resolve issues, leading to a deeper understanding of the importance of unit consistency in calculations.

#### Debugging Guide

1. Enhanced code readability for easier debugging.
2. Identified and corrected calculation errors.
3. Improved the robustness of calculations, notifying users of incorrect units or other errors instead of producing incorrect results.
