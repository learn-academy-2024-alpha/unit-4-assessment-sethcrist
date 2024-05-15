# UNIT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# Create the code that makes all Bike specs pass.
# Run the file with the following command: $ rspec ruby_spec.rb

# Add comments to your code explaining your approach

class Bike
    # getters and setters for the specified attributes
    attr_accessor :wheels, :current_speed, :model
    def initialize (model)
        #sets the model of the bike
        @model = model
        #each new bike will start with 2 wheels
        @wheels = 2
        #sets a strating speed of 0
        @current_speed = 0
    end

    def pedal_faster(mph)
        #allows the speed to increase
        @current_speed += mph
    end

    def brake(mph)
        #will decrease the speed 
        @current_speed -= mph
        #speed cannot go less that 0 (no negative numbers)
        @current_speed = 0 if @current_speed < 0
        #returns the current speed
        @current_speed
    end

    def bike_info 
        #returns the string containing the information
        "The #{model} bike has #{wheels} wheels and is going #{current_speed} mph."
    end
    
end