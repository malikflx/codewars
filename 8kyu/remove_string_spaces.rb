# Task
# Simple, remove the spaces from the string, then return the resultant string.

# Solution:
def no_space(x)
  # Step 1
  x.gsub(" ", "")
end

# Step 1: Make use of the built-in gsub() method to replace the spaces in the string.